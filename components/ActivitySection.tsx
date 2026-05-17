"use client";
import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion, AnimatePresence } from "framer-motion";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  contributionPoints: number;
}

const ActivityTracker = ({ githubUser }: { githubUser: string }) => {
  const [lcData, setLcData] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // setIsMounted(true);
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/leetcode");
        const data = await response.json();

        if (data.status === "success") {
          setLcData(data);
        }
      } catch (err) {
        console.error("Failed to load LeetCode data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // if (!isMounted) {
  //   return <div className="bg-[#f2f0ea] py-20 min-h-screen" />;
  // }

  return (
    <section className="bg-[#f2f0ea] py-20 px-96">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-6xl font-bold tracking-tighter text-[#1a1a1a]">
            Activity <span className="text-gray-400">/</span>{" "}
            <span className="text-gray-400 font-medium italic">Tracker</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-8 bg-white/80 backdrop-blur-sm p-8 rounded-[2.5rem] border border-black/5 shadow-sm flex flex-col justify-between transition-shadow hover:shadow-xl"
          >
            <div>
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a]">
                    GitHub Contributions
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Consistency in code
                  </p>
                </div>
                <span className="bg-gray-100 px-4 py-1 rounded-full text-xs font-mono text-gray-600">
                  @{githubUser}
                </span>
              </div>

              <div className="flex justify-center overflow-x-auto pb-4 custom-scrollbar">
                <GitHubCalendar
                  username={githubUser}
                  blockSize={13}
                  blockMargin={5}
                  fontSize={12}
                  colorScheme="light"
                  theme={{
                    light: [
                      "#e1e1e1",
                      "#9be9a8",
                      "#40c463",
                      "#30a14e",
                      "#216e39",
                    ],
                  }}
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between text-xs text-gray-400 font-medium uppercase tracking-widest">
              <span>Past 12 Months</span>
              <span>Less — More</span>
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 bg-[#0d0d0d] p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[80px] group-hover:bg-emerald-500/20 transition-colors" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  LeetCode Stats
                </h3>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 py-4"
                  >
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-4 bg-white/5 rounded-full animate-pulse w-full"
                      />
                    ))}
                  </motion.div>
                ) : lcData ? (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">
                        {lcData.totalSolved}
                      </span>
                      <span className="text-gray-500 font-medium">
                        / {lcData.totalQuestions}
                      </span>
                    </div>

                    <div className="space-y-5">
                      <ProgressRow
                        label="Easy"
                        solved={lcData.easySolved}
                        total={lcData.totalEasy}
                        color="bg-emerald-400"
                      />
                      <ProgressRow
                        label="Medium"
                        solved={lcData.mediumSolved}
                        total={lcData.totalMedium}
                        color="bg-yellow-400"
                      />
                      <ProgressRow
                        label="Hard"
                        solved={lcData.hardSolved}
                        total={lcData.totalHard}
                        color="bg-rose-500"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <p className="text-gray-500 text-sm">
                    Failed to load metrics.
                  </p>
                )}
              </AnimatePresence>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                  Global Ranking
                </p>
                <p className="text-white font-mono text-sm">
                  #{lcData?.ranking.toLocaleString() || "---"}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                  Points
                </p>
                <p className="text-white font-mono text-sm">
                  {lcData?.contributionPoints || "0"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProgressRow = ({
  label,
  solved,
  total,
  color,
}: {
  label: string;
  solved: number;
  total: number;
  color: string;
}) => {
  const percentage = (solved / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
        <span className="text-gray-400">{label}</span>
        <span className="text-white">
          {solved}
          <span className="text-gray-600 ml-1">/ {total}</span>
        </span>
      </div>
      <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
};

export default ActivityTracker;
