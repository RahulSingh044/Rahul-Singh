import { NextResponse } from "next/server";

export async function GET() {
  // We query matchedUser for solved stats and profile for ranking/points
  const query = `
    query userPublicProfile($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        contributions {
          points
        }
        profile {
          ranking
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: { username: "RahulSingh044" },
      }),
    });

    if (!response.ok) {
      throw new Error("LeetCode GraphQL Request Failed");
    }

    const result = await response.json();
    const data = result.data;

    if (!data.matchedUser) {
      return NextResponse.json({ status: "failed", message: "User not found" });
    }

    // Mapping the arrays to a readable object
    const totalCounts = data.allQuestionsCount;
    const solvedCounts = data.matchedUser.submitStats.acSubmissionNum;

    const stats = {
      status: "success",
      totalSolved: solvedCounts[0].count, // "All" difficulty
      totalQuestions: totalCounts[0].count,

      easySolved: solvedCounts[1].count,
      totalEasy: totalCounts[1].count,

      mediumSolved: solvedCounts[2].count,
      totalMedium: totalCounts[2].count,

      hardSolved: solvedCounts[3].count,
      totalHard: totalCounts[3].count,

      ranking: data.matchedUser.profile.ranking,
      contributionPoints: data.matchedUser.contributions.points,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("GraphQL Fetch Error:", error);
    return NextResponse.json(
      { status: "failed", message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
