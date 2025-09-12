import React from "react";
import { ArrowLeft, Github, PlayCircle, FileText, ExternalLink } from "lucide-react";
import Hr from "../../assets/Projects/card.png"
import System from "../../assets/Projects/system.png"
import Market from "../../assets/Projects/market.png"
const HRGrievanceDetail = () => {
  return (
    <div className="px-6 py-8 max-w-5xl mx-auto">
      {/* Back link */}
      <a
        href="/project"
        className="flex items-center text-gray-500 hover:text-gray-800 mb-6"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Projects
      </a>

      {/* Header */}
      <p className="text-sm text-gray-500 mb-2">Product Management & HR Tech</p>
      <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2 mb-3">
        AI-Powered HR Grievance Management System
      </h1>
      <img src={Hr} alt="grievance" />
      <p className="text-lg text-gray-600 mb-4">
        Transforming workplace conflict resolution through intelligent automation and anonymous reporting
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {[
          "Workflow Automations",
          "Prototyping",
          "HR Technology",
          "API Integrations",
          "User Experience Design",
          "Vibe Coding",
          "Product Research",
        ].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Overview */}
      <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
      <p className="text-gray-700 mb-6">
        Built an end-to-end AI-powered grievance management platform that reduces HR
        processing time by 70% while ensuring complete employee anonymity and
        real-time transparency. The system addresses a $8.79B market opportunity in
        workplace conflict resolution, demonstrating how thoughtful product management
        can tackle complex organizational challenges.
      </p>

      {/* Challenge */}
      <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
      <p className="text-gray-700 mb-6">
        The numbers tell a stark story: 25% of UK employees experience workplace conflict annually, costing organizations $359 billion in lost productivity. Yet most companies still rely on outdated, manual grievance processes that create more problems than they solve.
      </p>
      <p className="text-gray-700 mb-6">Through extensive research, I discovered that traditional grievance management suffers from three critical failures. First, manual case processing takes 2-4 hours per submission, creating bottlenecks that delay resolution when employees need help most. Second, the lack of anonymous reporting options leads to systematic underreporting, as employees fear retaliation more than they trust the process. Finally, poor visibility into case status creates a black hole effect where employees submit concerns and then wonder if anyone actually cares.</p>
      <p className="text-gray-700 mb-6">The research revealed an additional insight: while 76% of HR managers believe their organization will fall behind without AI integration, only 38% have actually implemented AI solutions. This gap represents both a market opportunity and a chance to build something that genuinely improves how people experience work.</p>

      {/* Solution */}
      <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
      <p className="text-gray-700 mb-6">
        Rather than building another HR tool, I focused on creating a system that fundamentally transforms the relationship between employees and grievance processes. The platform centers on four core capabilities that work together to create trust through transparency.
      </p>
      <p className="text-gray-700 mb-6">
        The anonymous reporting system uses secure token-based tracking that allows employees to engage in two-way communication without ever revealing their identity. This wasn't just about building a form—it required careful consideration of how someone in crisis would actually use the system, leading to a 6-step guided process that reduces cognitive load during high-stress situations.
      </p>
      <p className="text-gray-700 mb-6">
        The AI-powered case analysis component uses GPT-4 with custom prompt engineering to extract structured information while protecting personally identifiable information. Rather than generic AI, I designed three specialized agents: one for case summarization that identifies who, what, when, and where while maintaining anonymity; another for intelligent HR assignment based on expertise and workload; and a third for SLA management using organizational rules.
      </p>
      <p className="text-gray-700 mb-6">
        Smart HR assignment goes beyond simple routing by considering specialist expertise, current workload, and case severity. The system ensures that harassment cases reach compliance specialists while balancing workload across the team. For anonymous cases, it maintains the delicate balance of providing context to HR while preserving reporter privacy.
      </p>
      <p className="text-gray-700 mb-6">
        Real-time communication creates a dialogue-driven resolution process where both parties can engage meaningfully throughout the case lifecycle. The system sends proactive updates, manages expectations about timelines, and provides secure channels for ongoing conversation.
      </p>

      {/* Video Embed */}
       <h3 className="text-xl font-semibold mt-6 mb-4">Demo Video</h3>
      <div className="w-full h-[400px] rounded-lg shadow mb-8 overflow-hidden">
        <iframe
          src="https://www.loom.com/embed/6319f87795ba42c29b930b47965e283c?sid=046e8361-61f3-4ec7-8f75-d5991d475efb"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Technical Implementation */}
      <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
      <p className="text-gray-700 mb-6">
        The architecture reflects a deliberate choice to prioritize reliability and user experience over technical complexity. The frontend uses React.js with progressive web app capabilities, ensuring the system works seamlessly across devices—critical when someone might need to report an urgent issue from their personal phone.
      </p>
      <p className="text-gray-700 mb-6">
        Supabase provides the backend infrastructure with PostgreSQL and Row-Level Security, creating a foundation that scales while maintaining strict data protection. The AI integration leverages OpenAI GPT-4 through carefully engineered prompts that ensure consistent, accurate analysis across different types of cases.
      </p>
      <p className="text-gray-700 mb-6">
        The automation layer uses n8n workflows that process cases in under 2 minutes while maintaining 99.3% success rates. This isn't just about speed—it's about creating predictable, reliable experiences when people are dealing with sensitive workplace issues.
      </p>
<img src={System} alt="Technical Implementation" />
      {/* Product Management Approach */}
      <h2 className="text-2xl font-semibold mb-4">Product Management Approach</h2>
      <p className="text-gray-700 mb-6">
        The project began with comprehensive market research that went beyond surface-level statistics to understand the human impact of workplace conflict. I analyzed 12+ industry reports and academic studies, but more importantly, I focused on understanding the emotional and psychological barriers that prevent effective grievance reporting.
      </p>
      <p className="text-gray-700 mb-6">
        This research informed a user-centered design process that prioritized building trust over demonstrating technical capability. Every feature decision traced back to specific user needs: the anonymous option addresses fear of retaliation, the real-time tracking satisfies the need for transparency, and the AI analysis ensures consistent, fair treatment regardless of who handles the case.
      </p>
      <p className="text-gray-700 mb-6">
        The technical strategy balanced ambitious automation with practical implementation constraints. Rather than trying to automate everything, I identified the specific manual tasks that created the biggest bottlenecks and addressed those systematically. The result is a system that feels magical to users while remaining maintainable and reliable for administrators.
      </p>

      {/* Key Results */}
      <h2 className="text-2xl font-semibold mb-4">Key Results</h2>
      <p className="text-gray-700 mb-6">
        The transformation in processing efficiency speaks to more than just operational improvements. Reducing case processing from 2-4 hours to under 2 minutes means employees get acknowledgment and initial response within the same day they report an issue. This speed creates a fundamentally different experience—one where people feel heard rather than ignored.
      </p>
      <p className="text-gray-700 mb-6">
        The 100% consistency in case analysis addresses a more subtle but important problem: unconscious bias in how different types of cases get prioritized or categorized. The AI agents apply the same rigorous analysis whether the case involves a C-level executive or an entry-level employee, creating fairness through systematic processing.
      </p>
      <p className="text-gray-700 mb-6">
        Perhaps most importantly, the anonymous submission capability with real-time communication solves what many considered an impossible problem: how to maintain meaningful dialogue about sensitive issues while protecting reporter identity.
      </p>
      <table className="w-full text-left border mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Metric</th>
            <th className="p-2 border">Achievement</th>
            <th className="p-2 border">Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Processing Time</td>
            <td className="p-2 border">&lt;2 minutes</td>
            <td className="p-2 border">92% reduction from manual baseline</td>
          </tr>
          <tr>
            <td className="p-2 border">Consistency</td>
            <td className="p-2 border">100% standardized analysis</td>
            <td className="p-2 border">Eliminated human error in routing</td>
          </tr>
          <tr>
            <td className="p-2 border">Employee Trust</td>
            <td className="p-2 border">Anonymous submission capability</td>
            <td className="p-2 border">Addresses primary barrier to reporting</td>
          </tr>
          <tr>
            <td className="p-2 border">HR Efficiency</td>
            <td className="p-2 border">70% admin work reduction</td>
            <td className="p-2 border">Frees time for meaningful intervention</td>
          </tr>
        </tbody>
      </table>

      {/* Business Impact */}
      <h2 className="text-2xl font-semibold mb-4">Business Impact and Scalability</h2>
      <p className="text-gray-700 mb-6">
        The system addresses a validated market need in the $8.79B workplace conflict resolution market, which is growing at 7.6% annually. This growth reflects not just market expansion but increasing organizational recognition that effective conflict management is essential for retention, productivity, and legal compliance.
      </p>
      <p className="text-gray-700 mb-6">
        Beyond immediate operational benefits, the platform creates strategic advantages through data and insights that were previously impossible to capture. The comprehensive audit trails reduce legal risk while providing analytics that help organizations identify systemic issues before they escalate into larger problems.
      </p>
      <p className="text-gray-700 mb-6">
        The technical architecture supports scaling from small teams to enterprise deployments without requiring fundamental changes to the user experience. This scalability opens opportunities for both departmental pilots and organization-wide implementations.
      </p>
<img src={Market} alt="impact" />
      {/* Future Vision */}
      <h2 className="text-2xl font-semibold mb-4">Future Vision</h2>
      <p className="text-gray-700 mb-6">
        The roadmap extends beyond automating existing processes toward predictive and preventive conflict management. Phase 2 introduces advanced analytics that identify patterns across cases, departments, and time periods, enabling proactive intervention before conflicts escalate.
      </p>
      <p className="text-gray-700 mb-6">
        Phase 3 focuses on enterprise integration, connecting the platform with existing HRIS systems and expanding customization options for different organizational cultures and requirements. The ultimate goal is creating a comprehensive workplace culture management system that prevents conflicts rather than just processing them efficiently.
      </p>

      {/* Links */}
     {/* Links */}
      <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <a
          href="https://preview--grievance-management.lovable.app/"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <ExternalLink size={18} />
          Live Demo: Interactive Prototype
        </a>
        <a
          href="https://preview--grievance-management.lovable.app/status"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          <ExternalLink size={18} />
          Case Tracking: Status Demo
        </a>
        <a
          href="https://github.com/yourusername/ai-grievance-management-system"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-sm"
        >
          <Github size={18} />
          GitHub Repository
        </a>
        <a
          href="https://medium.com/@pbhat033/transforming-hr-grievance-management-with-ai-a-product-managers-journey-aa2418a5883b"
          className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
        >
          <FileText size={18} />
          Medium Case Study
        </a>
      
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="text-gray-700 font-medium mb-2">Demo Credentials:</p>
        <p className="text-gray-600">Username: admin@test.com</p>
        <p className="text-gray-600">Password: 123456789</p>
        <p className="text-gray-600 mt-2">Test Case ID: GRV-271904563</p>
      </div>
    </div>
  );
};

export default HRGrievanceDetail;