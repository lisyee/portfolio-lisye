export default function Awards() {
  const awards = [
    {
      title: "Excellent Work Award (佳作)",
      competition: "2023 Innovation and Creative Practice Proposal Competition",
      date: "Dec 2023",
      details: "Group: SunPower AI. Developed a smart solar panel site assessment system using Random Forest machine learning algorithms."
    },
    {
      title: "Bronze Award - Oral Presentation Competition",
      competition: "2023 Global VIP Student Workshop",
      date: "Oct 2023",
      details: "Presented the project of Remote Veterinarian Services."
    },
    {
      title: "Second Runner-Up",
      competition: "The 18th Strategies of Warring States Period National Innovation & Entrepreneurship Competition 2023",
      date: "06/2023",
      details: "Group: The NDHU Squad. Developed remote veterinarian services project using React."
    },
    {
      title: "First Choice Award (優勝獎)",
      competition: "2023 Hualien County HSH Innovation and Entrepreneurship Competition",
      date: "06/2023",
      details: "Group: Mission Possible. Developed a smart solar panel site assessment system using Random Forest and self-built sensors."
    },
    {
      title: "NDHU Certificate of Award",
      competition: "National Dong Hwa University",
      date: "2023 - 2024",
      details: "Awarded for outstanding academic performance for 3 consecutive semesters (Fall 2022, Spring 2023, Fall 2023)."
    },
    {
      title: "NDHU Full Scholarship",
      competition: "National Dong Hwa University",
      date: "2022 - 2024",
      details: "Recipient of 100% tuition waiver and monthly living allowance."
    },
    {
      title: "Dean's Honor List",
      competition: "Atma Jaya Makassar University",
      date: "2014 - 2016",
      details: "Ranked among the top 5% and top 10% of the department in recognition of high scholastic achievements."
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Honors & Awards</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {awards.map((award, index) => (
          <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-bold text-slate-900 text-base">{award.title}</h3>
                <span className="text-xs text-slate-400 whitespace-nowrap">{award.date}</span>
              </div>
              <p className="text-blue-600 text-xs font-semibold mt-1">{award.competition}</p>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">{award.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
