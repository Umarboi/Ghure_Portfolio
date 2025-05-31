
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-semibold font-poppins">Ghure Mohd Umar</h3>
            <p className="text-gray-400">Engineer</p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ghure Mohd Umar. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              "Engineering systems that think, respond, and evolve."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
