"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    address: "",
    tel: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setErrors((prev) => ({ ...prev, email: value ? !isValidEmail : true }));
    } else if (name === "name" || name === "message") {
      setErrors((prev) => ({ ...prev, [name]: !value }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({
          company: "",
          name: "",
          address: "",
          tel: "",
          email: "",
          message: "",
        });
        setSuccess(true);
      } else {
        console.error("送信に失敗しました");
      }
    } catch (err) {
      console.error("送信エラー:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">CONTACT</h2>
      <div className="bg-white shadow-md rounded-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="貴社名" name="company" value={formData.company} onChange={handleChange} />
          <Input
            label="氏名"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            showRequired={!formData.name && !errors.name}
          />
          <Input label="住所" name="address" value={formData.address} onChange={handleChange} />
          <Input label="TEL" name="tel" value={formData.tel} onChange={handleChange} type="tel" />
          <Input
            label="メール"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            showRequired={!formData.email && !errors.email}
            error={errors.email ? "正しいメールアドレスを入力してください" : ""}
          />
          <Textarea
            label="お問い合わせ内容"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            showRequired={!formData.message && !errors.message}
          />

          <div className="border rounded shadow-sm p-4 max-h-[200px] overflow-y-auto text-sm text-gray-600 bg-white">
            株式会社リフレクション（以下、「当社」といいます。）は、当社が管理および運営するサイトおよびサービス（以下、「本サービス」といいます。）を利用するユーザー（以下「ユーザー」といいます。）個人情報の重要性を認識し、適切な収集、利用、保護の徹底をはかるためにプライバシーポリシーを定め、以下のとおり運用いたします。<br /><br />

            <strong>第1条（個人情報の定義）</strong><br />
            プライバシーポリシーにおいて個人情報は下記のいずれかに該当するものとします。<br />
            （1）当該情報に含まれる氏名、住所、性別、職業、電話番号、電子メールアドレス等により特定の個人を識別することができるもの<br />
            （2）その情報のみでは特定の個人を識別できないが、他の情報と容易に照合することができ、この照合により特定の個人を識別できることとなる情報。<br />
            （3）個人識別符号（個人情報の保護に関する法律 第2条第2項）が含まれるもの。<br /><br />

            <strong>第2条（個人情報の収集）</strong><br />
            当社は、個人情報を取得するにあたって、その利用目的を明示し、利用目的の達成に必要な範囲内で、適法かつ公正な手段によって取得いたします。<br /><br />

            <strong>第3条（個人情報の管理）</strong><br />
            当社は、個人情報の保護に関する運用要領を定めるとともに、個人情報の管理責任者を置いて適切に管理します。<br /><br />

            <strong>第4条（個人情報の第三者提供）</strong><br />
            当社は、以下のいずれかに該当する場合を除き、取得する個人情報を第三者に提供することはございません。<br />
            （1）ご本人から承諾を得た場合<br />
            （2）法令等に基づく場合<br />
            （3）人の生命、身体、または財産の保護のために個人データの第三者提供が必要である場合であって、ご本人の同意を得ることが困難である場合<br />
            （4）公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を取ることが困難である場合<br />
            （5）国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合<br />
            （6）有料のサービス利用や商品注文等に伴うクレジットカード等の決済手続きに際してユーザーの銀行口座やクレジットカード等の正当性を金融機関、カード会社等に確認する場合<br /><br />

            <strong>第5条（個人情報の開示・訂正・利用停止等）</strong><br />
            当社が保有している個人データについて、ご本人が開示、訂正、追加、削除、利用停止、消去、第三者提供の停止をご要望される場合は、次の場合を除き、適切・迅速に回答いたします。<br />
            （1）ご本人または第三者の生命、身体、財産そのほかの権利利益を害するおそれがある場合<br />
            （2）当社の業務の適正な実施に著しい支障をおよぼす恐れがある場合<br />
            （3）他の法令に違反することとなる場合<br /><br />

            <strong>第6条（第三者への委託）</strong><br />
            当社は、個人情報の処理を外部に委託する場合は、適正な委託先を選定するとともに個人情報保護に関する契約を委託先と取り交わし、委託先に対して必要かつ適切な監督を行います。<br /><br />

            <strong>第7条（Cookieの利用）</strong><br />
            当社は、ウェブサイトにおける利用状況を分析するため、あるいは個々のユーザーに対してよりカスタマイズされたサービス・広告を提供する等の目的のため、Cookieおよび類似技術を利用して一定の情報を収集する場合がございます。<br />
            （1）「Cookie」とは、ユーザーがwebサイトにアクセスした時にwebサーバーからユーザーの利用するコンピュータやモバイルデバイスのブラウザに送信され、デバイスの内蔵ストレージに保存されるテキストファイルのことです。<br />
            （2）「Cookie」は、ユーザーのwebブラウザを識別しますが、ユーザーを個人として識別することはございません。<br />
            （3）多くのブラウザは、はじめから「Cookie」が利用されるように設定されておりますが、利用者はCookieの受け入れに際して警告を表示したり、拒否するようにブラウザの設定を変更することが可能です。<br />
            （4）取得される「Cookie」情報は当社のサーバーではなく、第三者企業のサーバーに蓄積され、第三者企業のプライバシーポリシーによって管理されます。<br /><br />

            <strong>第8条（免責）</strong><br />
            当社は、掲載情報の正確性について万全を期すように努めておりますが、ユーザーが本サービスの情報を用いて行う一切の行為について何ら責任を負うものではございません。<br /><br />

            <strong>第9条（プライバシーポリシーの変更）</strong><br />
            当社は、社会情勢の変化、技術の進歩、個人情報保護法の改正等に応じて、事前に予告なくプライバシーポリシーを変更する場合がございます。変更した場合は、当社所定の方法でユーザーに通知、公表いたします。<br /><br />

            <strong>第10条（お問い合わせ窓口）</strong><br />
            上記の内容についてのお問い合わせはお問い合わせフォームをご利用いただくか下記の連絡先にご連絡ください。<br /><br />

            株式会社リフレクション<br />
            〒500-0006 大阪府大阪市西区江之子島1-7-3 奥内阿波座駅前ビル808<br />
            info@reflection-inc.com<br />
            担当：近藤 聖樹<br /><br />

            2022年4月13日 制定<br />
            2023年2月1日 改訂<br /><br />
            免責事項<br />
            著作権<br /><br />
            附則<br />
            2022年4月13日　制定・施行
          </div>

          <div className="mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mr-2"
              />
              プライバシーポリシーに同意します
            </label>
          </div>

          {success && <p className="text-green-600 text-sm">送信が完了しました！</p>}

          <button
            type="submit"
            disabled={!consent || loading}
            className={`w-full h-12 px-4 rounded-xl font-bold tracking-wide text-white transition-all duration-200 ${consent && !loading
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:scale-105 hover:shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {loading ? "送信中..." : "送信"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  error,
  showRequired,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  showRequired?: boolean;
}) {
  return (
    <div>
      <label className="block mb-1 font-medium">
        {label}
        {showRequired && <span className="ml-2 text-red-500 text-xs">※必須項目</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full h-11 px-3 rounded-lg border ${error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function Textarea({
  label,
  name,
  value,
  onChange,
  required = false,
  error,
  showRequired,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  showRequired?: boolean;
}) {
  return (
    <div>
      <label className="block mb-1 font-medium">
        {label}
        {showRequired && <span className="ml-2 text-red-500 text-xs">※必須項目</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        required={required}
        className={`w-full px-3 py-2 rounded-lg border ${error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
