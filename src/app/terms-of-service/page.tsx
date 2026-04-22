import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Waterline Growth",
  description:
    "The terms and conditions governing use of Waterline Growth's website and services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" updated="December 1, 2026">
      <h2>1. Introduction</h2>
      <p>
        These Terms &amp; Conditions ("Terms") govern your use of the website
        and services provided by{" "}
        <strong>Obby LLC, DBA Waterline Growth</strong>. By accessing or using
        our services, you agree to be bound by these Terms. You must be at
        least 18 years old to use our services.
      </p>

      <h2>2. Use of Our Services</h2>
      <p>
        We provide marketing and lead generation services for swimming pool
        contractors. By using our services, you agree to provide accurate
        information, use the site lawfully, and refrain from interfering with
        the website's functionality or attempting unauthorized access.
      </p>

      <h2>3. SMS Messaging Terms &amp; Conditions</h2>

      <h3>SMS program description</h3>
      <p>
        By providing your phone number and opting in through our website forms,
        you consent to receive SMS messages from{" "}
        <strong>Obby LLC (Waterline Growth)</strong>. Messages may include
        appointment confirmations, service updates, and customer support
        communications.
      </p>

      <h3>Opt-in &amp; consent</h3>
      <p>
        SMS messages are only sent after <strong>explicit consent</strong>{" "}
        obtained via a checkbox opt-in on our website forms. Consent is not a
        condition of purchase.
      </p>

      <h3>Message frequency &amp; charges</h3>
      <p>
        Message frequency varies based on your activity. Standard message and
        data rates may apply, depending on your mobile carrier and plan.
      </p>

      <h3>Opt-out instructions</h3>
      <p>
        You can opt out of SMS messaging at any time by replying{" "}
        <strong>STOP</strong> to any message you receive. You will receive a
        final confirmation message and no further texts will be sent.
      </p>

      <h3>Help &amp; support</h3>
      <p>
        Reply <strong>HELP</strong> to any SMS message for assistance, or
        contact us at{" "}
        <a href="mailto:team@waterlinegrowth.com">team@waterlinegrowth.com</a>.
      </p>

      <h2>4. Data Privacy</h2>
      <p>
        We do not sell or share your personal information, including SMS opt-in
        data, with third parties for marketing purposes. Please review our{" "}
        <a href="/privacy-policy">Privacy Policy</a> for additional details.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Our site may contain links to third-party websites. We are not
        responsible for the content, policies, or practices of those external
        sites.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        <strong>Obby LLC (Waterline Growth)</strong> shall not be liable for
        any indirect, incidental, or consequential damages arising from your
        use of our services.
      </p>

      <h2>7. Disclaimer</h2>
      <p>
        All services are provided <strong>"as is"</strong> without warranties
        of any kind, either express or implied.
      </p>

      <h2>8. Termination</h2>
      <p>
        We reserve the right to terminate or suspend access to our services at
        any time if these Terms are violated.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the{" "}
        <strong>State of California, United States</strong>, without regard to
        its conflict-of-law principles.
      </p>

      <h2>10. Dispute Resolution</h2>
      <p>
        Any disputes arising from these Terms or our services will first be
        resolved through informal negotiation before pursuing any other
        remedies.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms periodically. Continued use of our services
        after changes are posted means you accept the updated Terms.
      </p>

      <h2>12. Contact Information</h2>
      <p>
        <strong>Obby LLC, DBA Waterline Growth</strong>
        <br />
        Address: 548 Market St PMB 82051, San Francisco, CA 94104
        <br />
        Email:{" "}
        <a href="mailto:team@waterlinegrowth.com">team@waterlinegrowth.com</a>
        <br />
        Phone: <a href="tel:+18335744528">+1 833-574-4528</a>
      </p>
    </LegalLayout>
  );
}
