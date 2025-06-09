import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface ReflectionSection {
  title: string;
  content: string;
}

interface ReflectionData {
  stageReflection: ReflectionSection;
  personalGrowth: ReflectionSection;
  futureVision: ReflectionSection;
  workplaceReflection: ReflectionSection;
}

interface ReflectionProps {
  reflection: ReflectionData;
}

const Reflection: React.FC<ReflectionProps> = ({ reflection }) => {
  const sections = [
    reflection.stageReflection,
    reflection.personalGrowth,
    reflection.futureVision,
    reflection.workplaceReflection,
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Reflectie</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-left">
                    <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                      {section.title}
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-primary-500 transition-transform duration-200`}
                    />
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 pb-6 pt-2">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reflection; 