import React, { useRef, useEffect } from 'react'
//@ts-ignore
import TagCloud from 'TagCloud'
const SphereWords = () => {
  const tagCloudReference = useRef<any>(null);
  useEffect(() => {
    if(!tagCloudReference.current){
      const container = ".tagcloud";
        const texts = [
          "HTML",
          "CSS",
          "JavaScript",
          "Next.js",
          "React",
          "Tailwind",
          "NodeJS",
          "Java",
          "Springboot",
          "GIT",
          "GITHUB",
          "C#"
        ];

        const options = {
          radius: 300,
          maxSpeed: "fast",
          initSpeed: "fast",
          keep: true,
        };

        tagCloudReference.current = TagCloud(container, texts, options);
    }
        
  }, []);

  return (
    <div className='sphereword'>
      <div className='sphere'>
        <div className="text-shpere">
          {/* span tag className must be "tagcloud"  */}
          <span className="tagcloud"></span>
        </div>
      </div>
    </div>
  )
}

export default SphereWords