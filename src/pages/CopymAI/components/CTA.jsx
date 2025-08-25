import Button from "./Button";
import Section from "./Section";

const CTA = () => {
  return (
    <Section className="bg-gradient-to-r from-color-1 to-color-4">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="h2 mb-6 text-white">
            Ready to Transform Your RWA Tokenization?
          </h2>
          <p className="body-1 mb-8 text-white/90">
            Join leading financial institutions and start leveraging AI-powered RWA tokenization today. 
            Get early access to the future of finance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href="#contact" 
              className="bg-white text-color-1 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Free Trial
            </Button>
            <Button 
              href="#demo" 
              className="border-2 border-white text-white hover:bg-white hover:text-color-1 px-8 py-4 text-lg font-semibold"
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
