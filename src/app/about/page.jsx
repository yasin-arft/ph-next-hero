import AboutContents from '@/components/AboutContents';
import React from 'react';

const AboutPage = () => {
  return (
    <main className='container mx-auto p-10'>
      <section>
        <h2 className='text-4xl text-center font-bold'>This is about page</h2>
        <AboutContents />
      </section>
    </main>
  );
};

export default AboutPage;