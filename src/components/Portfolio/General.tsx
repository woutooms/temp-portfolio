import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { SocialLinks } from "../../types";
import SocialIcon from "../SVG/SocialIcon";
import Button from "../Button";

interface GeneralProps {
  name: string;
  title: string;
  description: string;
  socials: Record<SocialLinks, string>;
}

const General: React.FC<GeneralProps> = ({
  name,
  title,
  description,
  socials,
}) => {
  const [visible, setVisible] = useState(false);
  const socialKeys = Object.keys(socials) as SocialLinks[];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <Transition
          show={visible}
          enter="transition-all duration-1000 ease-out"
          enterFrom="opacity-0 transform translate-y-8"
          enterTo="opacity-100 transform translate-y-0"
        >
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              {name}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-medium text-gradient mb-8">
              {title}
            </h2>
          </div>
        </Transition>

        <Transition
          show={visible}
          enter="transition-all duration-1000 ease-out delay-300"
          enterFrom="opacity-0 transform translate-y-8"
          enterTo="opacity-100 transform translate-y-0"
        >
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </Transition>

        <Transition
          show={visible}
          enter="transition-all duration-1000 ease-out delay-500"
          enterFrom="opacity-0 transform translate-y-8"
          enterTo="opacity-100 transform translate-y-0"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={scrollToNextSection}
              className="group"
            >
              Bekijk mijn werk
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              variant="outlined"
              onClick={() => window.location.href = '/contact'}
            >
              Neem contact op
            </Button>
          </div>
        </Transition>

        <Transition
          show={visible}
          enter="transition-all duration-1000 ease-out delay-700"
          enterFrom="opacity-0 transform translate-y-8"
          enterTo="opacity-100 transform translate-y-0"
        >
          <div className="flex justify-center space-x-6">
            {socialKeys.map((key, index) => (
              <a
                key={index}
                href={socials[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 hover:bg-primary-50 group text-gray-600 hover:text-primary-600"
              >
                <SocialIcon social={key} />
              </a>
            ))}
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default General;
