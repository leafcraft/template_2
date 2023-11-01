import React from 'react';

const ContactDrawer: React.FC = () => {
  const closeDrawer = () => {
    const drawer = document.getElementById('drawer-contact');
    if (drawer) {
      drawer.classList.add('-translate-x-full');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div id="drawer-contact" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" aria-labelledby="drawer-contact-label">
      <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        Contact us
      </h5>
      <button
        onClick={closeDrawer}
        aria-controls="drawer-contact"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <span className="sr-only">Close menu</span>
      </button>
      <form onSubmit={handleSubmit} className="mb-6">
        {/* Form fields */}
      </form>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <a href="#" className="hover:underline">
          info@company.com
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <a href="#" className="hover:underline">
          212-456-7890
        </a>
      </p>
    </div>
  );
};

export default ContactDrawer;
