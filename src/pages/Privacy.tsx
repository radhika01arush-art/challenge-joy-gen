import { ThemeToggle } from "@/components/ThemeToggle";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <ThemeToggle />
        </header>

        {/* Main Content */}
        <Card className="glass-card p-8 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold gradient-text">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6 text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="mb-2">
                Challenge Me is committed to protecting your privacy. We collect minimal information to provide you with the best experience:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Local storage data (challenge streak, completion status)</li>
                <li>Theme preferences (light/dark mode)</li>
                <li>Analytics data through Google AdSense</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Google AdSense & Cookies</h2>
              <p className="mb-2">
                This website uses Google AdSense to display advertisements. Google AdSense uses cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>Show personalized ads based on your previous visits to our website or other websites</li>
                <li>Measure ad effectiveness and provide aggregated reports</li>
                <li>Prevent the same ads from being shown to you repeatedly</li>
              </ul>
              <p className="mb-2">
                You can opt out of personalized advertising by visiting{" "}
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Ads Settings
                </a>
                {" "}or by visiting{" "}
                <a 
                  href="http://www.aboutads.info/choices/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.aboutads.info
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. GDPR Compliance</h2>
              <p className="mb-2">
                For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). Your rights include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Right to Access:</strong> You can request information about the data we process</li>
                <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> You can request deletion of your data</li>
                <li><strong>Right to Object:</strong> You can object to data processing</li>
                <li><strong>Right to Data Portability:</strong> You can request your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Local Storage</h2>
              <p>
                We use browser local storage to save your challenge streak and theme preferences locally on your device. This data never leaves your browser and is not transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Third-Party Services</h2>
              <p className="mb-2">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Google AdSense:</strong> For displaying advertisements</li>
              </ul>
              <p className="mt-2">
                These services have their own privacy policies and data collection practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Children's Privacy</h2>
              <p>
                Our service does not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your GDPR rights, please contact us through the About page.
              </p>
            </section>
          </div>
        </Card>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            Return to Challenge Me
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Privacy;
