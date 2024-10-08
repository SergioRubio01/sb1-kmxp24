import DocumentationHeader from './DocumentationHeader';
import { FaBook, FaRocket, FaKeyboard, FaCogs, FaCodeBranch, FaHistory, FaUsers } from 'react-icons/fa';

const DocumentationComponent = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar navigation menu */}
      <nav
        className="w-64 h-full fixed top-0 left-0 pt-24 pb-10 bg-gray-800 text-white flex flex-col"
        style={{ minHeight: '100vh' }}
      >
        <ul className="space-y-4 px-4">
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaBook size={20} />
            <a href="#core-features" className="font-semibold">
              Core Features
            </a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaRocket size={20} />
            <a href="#quickstart" className="font-semibold">
              Quickstart
            </a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaKeyboard size={20} />
            <a href="#important-shortcuts" className="font-semibold">
              Important Shortcuts
            </a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaCogs size={20} />
            <a href="#pipeline-demos" className="font-semibold">
              Pipeline Demos
            </a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaCodeBranch size={20} />
            <a href="#codebase-context" className="font-semibold">
              Codebase Context
            </a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaHistory size={20} />
            <a href="#changelog" className="font-semibold">
              Changelog
            </a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md">
            <FaUsers size={20} />
            <a href="#contributors" className="font-semibold">
              Contributors
            </a>
          </li>
        </ul>
      </nav>

      {/* Main documentation content */}
      <div className="flex-1 ml-64 p-10 pt-32">
        <DocumentationHeader />

        {/* Core Features component */}
        <section id="core-features" className="mt-10">
          <CoreFeatureCard
            title="Core Features"
            description="Learn about the main features that make BizAI the best no-code platform for machine learning."
          />
        </section>

        {/* Placeholder for other sections */}
        {/* Each section will use the same card structure as CoreFeatureCard */}
      </div>
    </div>
  );
};

// Core Features Card Component
const CoreFeatureCard = ({ title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300 mb-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default DocumentationComponent;
