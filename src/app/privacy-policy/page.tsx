import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Waterline Growth",
  description:
    "How Waterline Growth collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="December 1, 2026">
      <p>
        <strong>Important notice regarding text messaging data:</strong> Obby
        LLC, operating as Waterline Growth, does <strong>not</strong> share
        customer opt-in information, including phone numbers and consent
        records, with any affiliates or third parties for marketing or
        promotional purposes.
      </p>

      <h2>1. Information We Collect</h2>
      <p><strong>Personal information:</strong></p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company name</li>
      </ul>

      <p><strong>Non-personal information:</strong></p>
      <ul>
        <li>IP address, browser type, and device information</li>
        <li>Website usage behavior and analytics</li>
        <li>Cookies and tracking technologies</li>
      </ul>

      <p><strong>Customer communication data:</strong></p>
      <ul>
        <li>Records of inquiries and service requests</li>
        <li>Appointment details and preferences</li>
        <li>Communication history and feedback</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the information we collect to deliver our services, respond to
        your inquiries, send communications you've requested, deliver marketing
        messages (with your consent), improve website performance, analyze
        campaign effectiveness, and maintain your communication preferences.
      </p>

      <h2>3. SMS Messaging &amp; Compliance</h2>
      <p>
        Our text messages cover appointment confirmations, service updates,
        customer support, and promotional offers. Consent is obtained through
        website forms using an opt-in checkbox, and we record a timestamp of
        that consent.
      </p>
      <p>
        Users may opt out at any time by replying <strong>STOP</strong> to any
        message and will receive a final confirmation. Reply{" "}
        <strong>HELP</strong> for support.
      </p>

      <h3>SMS data protection statement</h3>
      <p>
        No mobile information will be shared with third parties or affiliates
        for marketing or promotional purposes.
      </p>

      <h2>4. Information Sharing &amp; Disclosure</h2>
      <p>
        We do not sell, rent, or trade your personal information. We share data
        only with service providers (CRM platforms, SMS providers, analytics
        tools) who are bound by confidentiality agreements, when legally
        required, or in connection with a business transfer.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement encrypted storage, access controls, and regular monitoring
        to protect your information. No system is 100% secure, so we cannot
        guarantee absolute security.
      </p>

      <h2>6. Cookies &amp; Tracking Technologies</h2>
      <p>
        Cookies help us analyze behavior, improve functionality, and enable
        personalized marketing. You can disable cookies through your browser
        settings.
      </p>

      <h2>7. Your Rights &amp; Choices</h2>
      <p>
        You may access, correct, or request deletion of your data. You can also
        request non-marketing communications only or withdraw consent at any
        time.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        Our site may link to third-party websites. We are not responsible for
        their privacy practices and recommend reviewing their policies.
      </p>

      <h2>9. Changes to This Privacy Policy</h2>
      <p>
        We may update this policy from time to time. Changes will be posted on
        this page with a revised effective date.
      </p>

      <h2>10. Contact Information</h2>
      <p>
        <strong>Obby LLC, DBA Waterline Growth</strong>
        <br />
        Email:{" "}
        <a href="mailto:team@waterlinegrowth.com">team@waterlinegrowth.com</a>
        <br />
        Phone: <a href="tel:+18335744528">833-574-4528</a>
        <br />
        Address: 18118 Califa St, Tarzana, CA 91356
      </p>
    </LegalLayout>
  );
}
