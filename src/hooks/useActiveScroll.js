import { useEffect, useState } from 'react';

const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Adjust the rootMargin to trigger the intersection
      { rootMargin: '-40% 0px -55% 0px' }
    );
// Observe each section by its id 
    ids.forEach((id) => {
      const el = document.getElementById(id);
      // If the element exists, observe it
      if (el) observer.observe(el);
    });
// Cleanup function to disconnect the observer when the component unmounts or ids change
    return () => observer.disconnect();
  }, [ids]);
// Return the currently active section id
  return active;
};

export default useActiveSection;