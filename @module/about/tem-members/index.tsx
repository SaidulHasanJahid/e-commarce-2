"use client";
import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jenifer Aniston",
    role: "Pharmacist",
    image: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//Team_4.jpg",
  },
  {
    name: "Vladimir Radskin",
    role: "Founder CEO",
    image: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//Team_3.jpg",
  },
  {
    name: "Michael Phelps",
    role: "Web Designer",
    image: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//Team_2.jpg",
  },
  {
    name: "Nina Burns",
    role: "Tech Leader",
    image: "https://clinicmaster.goeasyapp.com/uploads/files/c4ca4238a0b923820dcc509a6f75849b/c4ca4238a0b923820dcc509a6f75849b//Team_1.jpg",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-[28px] md:text-[32px] font-semibold text-black mb-12">
          Meet Our Team
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              {/* Image with hover transition */}
              <div className="w-[298px] h-[298px]  rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-[18px] md:text-[20px] font-medium text-[#000000]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[14px] md:text-[16px] text-[#666666] mt-3">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
