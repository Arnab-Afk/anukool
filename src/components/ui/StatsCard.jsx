import { Profile2User, User, Monitor } from "iconsax-react";
export default function StatsCard() {
  const candidateStat = 50;
  const recruiterStat = 18;
  const activeInterview = 10;
  return (
    <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-md w-full max-w-5xl mx-auto border border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <Profile2User size="32" color="#1a63a8" variant="Bold" />
        </div>
        <div>
          <p className="text-gray-500">Total students</p>
          <h2 className="text-2xl font-semibold">{candidateStat}</h2>
        </div>
      </div>

      <div className="h-16 border-l border-gray-300"></div>

      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <User size="32" color="#1a63a8" variant="Bold" />
        </div>
        <div>
          <p className="text-gray-500">Recruiters</p>
          <h2 className="text-2xl font-semibold">{recruiterStat}</h2>
        </div>
      </div>

      <div className="h-16 border-l border-gray-300"></div>

      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <Monitor size="32" color="#1a63a8" variant="Bold" />
        </div>
        <div>
          <p className="text-gray-500">Active Interview</p>
          <h2 className="text-2xl font-semibold">{activeInterview}</h2>
        </div>
      </div>
    </div>
  );
}
