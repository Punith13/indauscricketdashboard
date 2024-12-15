"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AusLogo from "../../static/images/Cricket_Australia.png";
import IndiaLogo from "../../static/images/india_cricket_logo.jpeg";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, watch } = useForm({
    defaultValues: {
      battingTeam: "Aus",
      battingTeamScoreWicket: 5,
      battingTeamScoreRuns: 214,
      batsman1Name: "Carrey",
      batsman1Runs: 34,
    },
  });

  const values = watch();

  const battingTeam = watch("battingTeam");
  const isBattingTeamAus = battingTeam === "Aus";

  const [battingTeamLogo, setBattingTeamLogo] = useState(
    values.battingTeam == "Aus" ? AusLogo : IndiaLogo
  );
  const [bowlingTeamLogo, setBowlingTeamLogo] = useState(
    values.battingTeam == "Aus" ? IndiaLogo : AusLogo
  );

  useEffect(() => {
    setBattingTeamLogo(isBattingTeamAus ? AusLogo : IndiaLogo);
    setBowlingTeamLogo(isBattingTeamAus ? IndiaLogo : AusLogo);
  }, [battingTeam]);

  return (
    <div className="h-full">
      <div className="dashboard">
        <div className="bg bg-blue-950 h-[250px] mt-[40px] flex justify-between">
          <div className="batting-team-logo flex items-center justify-center h-[250px] w-[20%] ">
            <div className="w-32"></div>

            <div
              className={`w-36 h-36 rounded-full overflow-hidden flex justify-center ring-2 ${
                isBattingTeamAus ? " ring-green-500" : "ring-blue-300"
              } shadow-[0_0_10px_#00ff00]`}
            >
              <Image
                className={`w-full h-full object-cover ${
                  isBattingTeamAus ? "object-[100%_0%]" : "object-[48%_0%]"
                }`}
                src={battingTeamLogo}
                alt="batting-team-logo"
              />
            </div>
          </div>

          <div className="flex flex-col h-[250px] justify-center">
            <div className="text-white text-3xl">
              {isBattingTeamAus ? "AUSTRALIA" : "INDIA"}
            </div>
            <div
              className={`${
                isBattingTeamAus ? "text-green-300" : "text-blue-500"
              } text-7xl`}
            >
              {`${values.battingTeamScoreWicket}-${values.battingTeamScoreRuns}`}
            </div>
          </div>

          <div className="m-auto flex flex-col w-[30%] h-[250px]">
            <div className="batsmen-switch flex  mt-[10%]">
              <div className="batsment-switch1 border border-white rounded-2xl h-9 w-1/2 text-white">
                <div className="flex items-center justify-between h-full">
                  <div className="text-white ml-5">
                    {values.batsman1Name.toUpperCase()}
                  </div>
                  <div className="text-white mr-10">{values.batsman1Runs}</div>
                </div>
              </div>
              <div className="batsment-switch2 flex items-center justify-between  border border-white rounded-2xl h-9 w-1/2 ml-[-20px] bg-gradient-to-r from-[#00ff00] to-[#aaffaa] z-[9999]">
                <div className="group flex items-center">
                  <div
                    className="ml-4"
                    style={{
                      width: "0",
                      height: "0",
                      borderLeft: "8px solid black",
                      borderTop: "6px solid transparent",
                      borderBottom: "6px solid transparent",
                    }}
                  ></div>
                  <div className="text-black ml-[10px] font-bold ">HEAD</div>
                </div>

                <div className="text-black font-bold mr-5">58</div>
              </div>
            </div>

            <div className="description w-full mt-10">
              <div
                className="text-white text-lg flex justify-center"
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>ASHWIN TO CARREY IN TESTS : <b>5-27</b> OFF <b>48</b> BALLS </p>",
                }}
              ></div>
            </div>
          </div>

          <div className="flex flex-col h-[250px] justify-center">
            <div className="text-white text-3xl">
              {isBattingTeamAus ? "INDIA" : "AUSTRALIA"}
            </div>
            <div
              className={`${
                isBattingTeamAus ? "text-blue-500" : "text-green-300"
              } text-2xl`}
            >
              BUMRAH
            </div>
            <div className="flex">
              {[1, 0, 0, "W", 4, 6].map((el) => BowlingDots(el.toString()))}
            </div>
          </div>

          <div className="bowling-team-logo flex items-center justify-center h-[250px] w-[20%]">
            <div
              className={`w-36 h-36 rounded-full overflow-hidden flex  justify-center ring-2 ${
                isBattingTeamAus ? "ring-blue-300" : "ring-green-500"
              }  shadow-[0_0_10px_#00ff00]`}
            >
              <Image
                className={`w-full h-full object-cover ${
                  isBattingTeamAus ? "object-[48%_0%]" : "object-[100%_0%]"
                }`}
                src={bowlingTeamLogo}
                alt="bowling-team-logo"
              />
            </div>
            <div className="w-32"></div>
          </div>
        </div>
      </div>
      <div className="config mt-10 ml-40">
        <div className="text-2xl mb-[50px]">Config</div>
        <form>
          <div className="flex flex-col w-[30%]">
            <div className="batting-team flex justify-between mb-5">
              <div className="dark:text-white text-xl mr-5">Batting team:</div>

              <div className="flex items-center space-x-6">
                {/* Option 1 */}
                <label className="flex items-center space-x-2">
                  <input
                    value="Aus"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    type="radio"
                    {...register("battingTeam")}
                  />
                  <span className="dark:text-white text-xl">Australia</span>
                </label>

                {/* Option 2 */}
                <label className="flex items-center space-x-2">
                  <input
                    value="Ind"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    type="radio"
                    {...register("battingTeam")}
                  />
                  <span className="dark:text-white text-xl">India</span>
                </label>
              </div>
            </div>

            <div className="batting-team-score flex justify-between mb-5">
              <div className="dark:text-white text-xl mr-5">
                Batting team score : (W-Runs)
              </div>
              <input
                type="number"
                min={0}
                max={10}
                defaultValue={0}
                placeholder="Batting team score"
                {...register("battingTeamScoreWicket", { required: true })}
                className="w-[20%] px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <input
                type="number"
                min={0}
                placeholder="Batting team score"
                {...register("battingTeamScoreRuns", { required: true })}
                className="w-[20%] px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>

            <div className="batsmen1 flex justify-between">
              <div className="dark:text-white text-xl mr-5">
                Batsmen1 - (Name , Runs)
              </div>
              <input
                type="text"
                placeholder="Batsman 1"
                {...register("batsman1Name", { required: true })}
                className="w-[40%] px-4 py-2 mr-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <input
                type="number"
                placeholder="Batsman 1"
                {...register("batsman1Runs", { required: true })}
                className="w-[20%] px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const BowlingDots = (text: string) => {
  return (
    <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center ml-1">
      <span className="text-[12px] text-white">{text}</span>
    </div>
  );
};
