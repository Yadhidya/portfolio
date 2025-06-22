import { FaEye } from 'react-icons/fa';

const CodingProfiles = () => {
  const codingProfiles = [
  {
    name: "LeetCode",
    username: "yadhidya",
    link: "https://leetcode.com/u/yadhidya/",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    description: "Practicing DSA problems and preparing for coding interviews.",
    statsType: "image",
    statsAPI: "https://leetcard.jacoblin.cool/yadhidya?theme=dark&ext=png"
  },
  {
    name: "CodeChef",
    username: "yadhidya_1",
    link: "https://www.codechef.com/users/yadhidya_1",
    image: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/cc-logo.png",
    description: "Participated in contests and improved competitive programming skills.",
    statsType: "api", 
    statsAPI: "https://competitive-coding-api.vercel.app/api/codechef/yadhidya_1"
  },
  {
    name: "GeeksforGeeks",
    username: "ulliyadhitcht",
    link: "https://auth.geeksforgeeks.org/user/ulliyadhitcht",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20210101144014/gfglogo.png",
    description: "Problem solving and contributing to articles.",
    statsType: "none"
  },
  {
    name: "Coding Ninjas",
    username: "yadhidya",
    link: "https://www.codingninjas.com/studio/profile/yadhidya",
    image: "https://assets.codingninjas.com/logo.png",
    description: "Completed challenges on CodeStudio.",
    statsType: "none"
  },
  {
    name: "HackerRank",
    username: "ulliyadhidya6002",
    link: "https://www.hackerrank.com/ulliyadhidya6002",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    description: "Earned badges in Problem Solving, SQL, and Java.",
    statsType: "none"
  },
];

  return (
    <div className="w-full flex flex-wrap justify-center gap-8">
      {codingProfiles.map((profile, index) => (
        <div
          key={index}
          className="w-full sm:w-[45%] md:w-[30%] border border-gray-700 bg-zinc-900 p-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-4 mb-3">
            <img src={profile.image} alt={profile.name} className="w-12 h-12 object-contain" />
            <h3 className="text-xl font-bold text-indigo-400">{profile.name}</h3>
          </div>
          <p className="text-gray-300 text-sm mb-2">{profile.description}</p>
          <a href={profile.link} target="_blank" rel="noopener noreferrer">
                        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                          <FaEye className="inline-block mr-2" />
                          View Profile
                        </button>
                      </a>
          {profile.statsType === 'image' && (
            <img
              src={profile.statsAPI}
              alt={`${profile.name} Stats`}
              className="mt-4 rounded-lg border border-gray-600 shadow"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CodingProfiles;
