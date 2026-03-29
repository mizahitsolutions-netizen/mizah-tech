export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      {/* Modal */}
      <div className="bg-[#0a0e1a] border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-lg font-bold">{project.name}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            ✕
          </button>
        </div>

        {/* Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-52 object-cover"
        />

        {/* Content */}
        <div className="p-6 space-y-4 text-sm text-slate-300">
          <div>
            <h3 className="font-semibold text-white mb-1">Problem</h3>
            <p>{project.caseStudy.problem}</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">Solution</h3>
            <p>{project.caseStudy.solution}</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-1">Result</h3>
            <p className="text-green-400 font-medium">
              {project.caseStudy.result}
            </p>
          </div>

          {/* CTA */}
          <a
            href={project.url}
            target="_blank"
            className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg text-white font-semibold"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>
  );
}
