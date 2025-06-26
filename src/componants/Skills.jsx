

export default function Skills() {
  const SkillDetails = {
    skills: [
      { s_name: "HTML", level: "Advanced" },
      { s_name: "CSS, Tailwind & Bootstrap", level: "Advanced" },
      { s_name: "JavaScript, jQuery", level: "Advanced" },
      { s_name: "React JS", level: "Regular" },
      { s_name: "MongoDB", level: "Regular" },
      { s_name: "Node JS", level: "Beginner" },
      { s_name: "Express JS", level: "Beginner" },
      { s_name: "MySQL", level: "Beginner" }
    ]
  };


  return (
    <section id="skills" className="text-white py-20 bg">
      <h1 className="font-bold text-3xl text-center mb-10">Skills</h1>
      <div className="max-w-3xl m-auto px-6">
        {SkillDetails.skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-1">
              <h2 className="font-semibold">{skill.s_name}</h2>
              <span className="text-sm text-gray-400">({skill.level})</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className={skill.level}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
