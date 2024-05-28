"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import arrowDown from "../assets/images/arrowDown512.png";
import avatarPlaceholder from "../assets/images/avatar_placeholder.png";
import settingsPng from "../assets/images/settings.png";
import lockPng from "../assets/images/lock.png";
import exitPng from "../assets/images/exit.png";
import menuPng from "../assets/images/menu.png";
import jobsPng from "../assets/images/jobs.png";
import jobsPng3 from "../assets/images/jobs3.png";
import usersPng from "../assets/images/users.png";
import penPng from "../assets/images/pen.png";
import { useState } from "react";
import FindTalentBlock from "./navbar/FindTalentBlock";
import FindJobBlock from "./navbar/FindJobBlock";
import ThemeToggle from "@/app/ThemeToggle";

export default function Page() {
  const session = useSession();
  const user = session.data?.user;

  const [userBlockActive, setUserBlockActive] = useState(false);

  const [findTalentBlockActive, setFindTalentBlockActive] = useState(false);
  const [findJobBlockActive, setFindJobBlockActive] = useState(false);

  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);

  return (
    <>
      <nav className="bottomBorder whiteBg fixed left-0 top-0 z-[200] w-full items-center justify-center py-4">
        <div className="whiteBg m-auto flex w-full items-center justify-between px-6 nv:max-w-[1400px] nv:px-0">
          <div className="flex items-end gap-8">
            <Link href={"/"}>
              <h2 className="customFont cursor-pointer text-[24px] font-bold text-blue">
                HelloWorld
              </h2>
            </Link>
            {!user ? (
              <ul className="hidden gap-4 pb-[6px] text-[12px] ss:flex">
                <li
                  className="flex cursor-pointer gap-1"
                  onClick={() => {
                    setFindTalentBlockActive(!findTalentBlockActive);
                    setFindJobBlockActive(false);
                    setUserBlockActive(false);
                  }}
                >
                  <p>Find Talent</p>
                  <Image
                    src={arrowDown}
                    width={16}
                    height={16}
                    alt="arrow down"
                    className={
                      findTalentBlockActive ? `rotate-180 transform` : undefined
                    }
                  />
                </li>
                <li
                  className="flex cursor-pointer gap-1"
                  onClick={() => {
                    setFindTalentBlockActive(false);
                    setFindJobBlockActive(!findJobBlockActive);
                    setUserBlockActive(false);
                  }}
                >
                  <p>Find Job</p>
                  <Image
                    src={arrowDown}
                    width={16}
                    height={16}
                    alt="arrow down"
                    className={
                      findJobBlockActive ? `rotate-180 transform` : undefined
                    }
                  />
                </li>
                <li className="cursor-pointer">
                  <Link href="#whyhelloworld" passHref>
                    <p>Why Helloworld</p>
                  </Link>
                </li>
              </ul>
            ) : (
              <>
                {!user.isTalent ? (
                  <ul className="hidden gap-4 pb-[6px] text-[12px] ss:flex">
                    <li
                      className="flex cursor-pointer items-center justify-center"
                      onClick={() => {
                        setFindTalentBlockActive(!findTalentBlockActive);
                        setFindJobBlockActive(false);
                        setUserBlockActive(false);
                      }}
                    >
                      <p>Talent marketplace</p>
                      <Image
                        src={arrowDown}
                        width={16}
                        height={16}
                        alt="arrow down"
                        className={
                          findTalentBlockActive
                            ? `rotate-180 transform`
                            : undefined
                        }
                      />
                    </li>
                    <Link href={"/job#myjobs"}>
                      <li className="flex cursor-pointer items-center justify-center">
                        <p>Your jobs</p>
                      </li>
                    </Link>
                    <Link href={"/job/new"}>
                      <li className="cursor-pointer">Post a job</li>
                    </Link>
                  </ul>
                ) : (
                  <ul className="hidden gap-4 pb-[6px] text-[12px] ss:flex">
                    <li
                      className="flex cursor-pointer items-center justify-center"
                      onClick={() => {
                        setFindTalentBlockActive(false);
                        setFindJobBlockActive(!findJobBlockActive);
                        setUserBlockActive(false);
                      }}
                    >
                      <p>Jobs marketplace</p>
                      <Image
                        src={arrowDown}
                        width={16}
                        height={16}
                        alt="arrow down"
                        className={
                          findJobBlockActive
                            ? `rotate-180 transform`
                            : undefined
                        }
                      />
                    </li>
                  </ul>
                )}
              </>
            )}
          </div>
          {user && (
            <div className="relative ">
              <Image
                src={user.image || avatarPlaceholder}
                alt="User profile picture"
                width={40}
                height={40}
                className="hidden aspect-square rounded-full bg-background object-cover ss:flex"
                onClick={() => {
                  setFindTalentBlockActive(false);
                  setFindJobBlockActive(false);
                  setUserBlockActive(!userBlockActive);
                }}
              />
              {userBlockActive && (
                <div className=" shadowAllSides whiteBg absolute right-0 top-[56px] w-[300px] rounded-lg p-2">
                  <div className="flex items-center  gap-6">
                    <Image
                      src={user.image || avatarPlaceholder}
                      alt="User profile picture"
                      width={40}
                      height={40}
                      className="aspect-square rounded-full bg-background object-cover"
                    />
                    <div>
                      <p className="  text-[18px] font-semibold">
                        {user.name || "User"}
                      </p>
                      <p className="  text-[14px] text-dark">
                        {user.email || null}
                      </p>
                    </div>
                  </div>
                  <div className="lightBorderY my-4 ">
                    <Link
                      href="/settings"
                      className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                    >
                      <Image
                        src={settingsPng}
                        alt="settings"
                        width={16}
                        height={16}
                      />
                      <p className=" text-[16px]">Settings</p>
                    </Link>
                    {user.role === "admin" && (
                      <>
                        <Link
                          href="/admin"
                          className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                        >
                          <Image
                            src={lockPng}
                            alt="lock"
                            width={16}
                            height={16}
                          />
                          <p className=" text-[16px]">Admin</p>
                        </Link>
                      </>
                    )}
                  </div>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex w-full items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                  >
                    <Image src={exitPng} alt="exit" width={16} height={16} />
                    <p className=" text-[16px]">Log out</p>
                  </button>
                </div>
              )}
              {userBlockActive && (
                <div className=" shadowAllSides whiteBg absolute right-0 top-[56px] w-[300px] rounded-lg p-2">
                  <div className="flex items-center  gap-6">
                    <Image
                      src={user.image || avatarPlaceholder}
                      alt="User profile picture"
                      width={40}
                      height={40}
                      className="aspect-square rounded-full bg-background object-cover"
                    />
                    <div>
                      <p className="  text-[18px] font-semibold">
                        {user.name || "User"}
                      </p>
                      <p className="  text-[14px] text-dark">
                        {user.email || null}
                      </p>
                    </div>
                  </div>
                  <div className="lightBorderY my-4 ">
                    <Link
                      href="/settings"
                      className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                    >
                      <Image
                        src={settingsPng}
                        alt="settings"
                        width={16}
                        height={16}
                      />
                      <p className=" text-[16px]">Settings</p>
                    </Link>
                    {user.role === "admin" && (
                      <>
                        <Link
                          href="/admin"
                          className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                        >
                          <Image
                            src={lockPng}
                            alt="lock"
                            width={16}
                            height={16}
                          />
                          <p className=" text-[16px]">Admin</p>
                        </Link>
                      </>
                    )}
                    <div className="mb-2 ml-12 mt-1">
                      <ThemeToggle />
                    </div>{" "}
                  </div>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex w-full items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                  >
                    <Image src={exitPng} alt="exit" width={16} height={16} />
                    <p className=" text-[16px]">Log out</p>
                  </button>
                </div>
              )}
            </div>
          )}
          {!user && session.status !== "loading" && (
            <div className="hidden items-center justify-center gap-4 ss:flex">
              <ThemeToggle />
              <div className="h-max-[5px]">
                <SignInButton />
              </div>
            </div>
          )}

          <Image
            src={menuPng}
            width={32}
            height={32}
            alt="menu"
            className="flex ss:hidden"
            onClick={() => {
              setFindTalentBlockActive(false);
              setFindJobBlockActive(false);
              setUserBlockActive(false);
              setHamburgerMenuActive(!hamburgerMenuActive);
            }}
          />
        </div>
      </nav>
      <FindTalentBlock status={findTalentBlockActive} />
      <FindJobBlock status={findJobBlockActive} />
      {hamburgerMenuActive ? (
        <div
          className={`shadowAllSides whiteBg fixed top-[69px] w-[100vw] p-2 `}
        >
          <div className="flex items-center  gap-6">
            <Image
              src={user?.image || avatarPlaceholder}
              alt="User profile picture"
              width={40}
              height={40}
              className="aspect-square rounded-full bg-background object-cover"
            />
            <div>
              <p className="  text-[18px] font-semibold">
                {user?.name || "User"}
              </p>
              <p className="  text-[14px] text-dark">{user?.email || null}</p>
            </div>
          </div>
          <div className="lightBorderY my-4 ">
            <div className=" w-full items-center justify-center">
              <Link
                href="/settings"
                className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
              >
                <Image
                  src={settingsPng}
                  alt="settings"
                  width={16}
                  height={16}
                />
                <p className=" text-[16px]">Settings</p>
              </Link>
            </div>
            {user?.role === "admin" && (
              <div className="w-full items-center justify-center">
                <Link
                  href="/admin"
                  className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                >
                  <Image src={lockPng} alt="lock" width={16} height={16} />
                  <p className=" text-[16px]">Admin</p>
                </Link>
              </div>
            )}
            {!user ? (
              <>
                <div className="w-full items-center justify-center">
                  <Link
                    href="/talent/search"
                    className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                  >
                    <Image
                      src={usersPng}
                      alt="user icon"
                      width={16}
                      height={16}
                    />
                    <p className=" text-[16px]">Find Talent</p>
                  </Link>
                </div>
                <div className="w-full items-center justify-center">
                  <Link
                    href="/job/search"
                    className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                  >
                    <Image
                      src={jobsPng}
                      alt="job icon"
                      width={16}
                      height={16}
                    />
                    <p className=" text-[16px]">Find Job</p>
                  </Link>
                </div>
              </>
            ) : (
              <>
                {user.isTalent ? (
                  <>
                    <div className="w-full items-center justify-center">
                      <Link
                        href="/job/search"
                        className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                      >
                        <Image
                          src={jobsPng3}
                          alt="jobs icon"
                          width={16}
                          height={16}
                        />
                        <p className=" text-[16px]">Jobs Marketplace</p>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full items-center justify-center">
                      <Link
                        href="/job#myjobs"
                        className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                      >
                        <Image
                          src={jobsPng}
                          alt="jobs icon"
                          width={16}
                          height={16}
                        />
                        <p className=" text-[16px]">Your jobs</p>
                      </Link>
                    </div>
                    <div className="w-full items-center justify-center">
                      <Link
                        href="/talent/search"
                        className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                      >
                        <Image
                          src={usersPng}
                          alt="users"
                          width={16}
                          height={16}
                        />
                        <p className=" text-[16px]">Talent Marketplace</p>
                      </Link>
                    </div>
                    <div className="w-full items-center justify-center">
                      <Link
                        href="/settings"
                        className="flex items-center justify-start gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                      >
                        <Image
                          src={penPng}
                          alt="pen icon"
                          width={16}
                          height={16}
                        />
                        <p className=" text-[16px]">Post a job</p>
                      </Link>
                    </div>
                  </>
                )}
              </>
            )}
            <div className="mb-2 ml-12 mt-1">
              <ThemeToggle />
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            {user ? (
              <div className="flex w-full items-center justify-center">
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="mb-2 flex gap-6 rounded-lg p-2 hover:bg-light hover:text-black"
                >
                  <Image src={exitPng} alt="exit" width={16} height={16} />
                  <p className=" text-[16px]">Log out</p>
                </button>
              </div>
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

function SignInButton() {
  return (
    <button
      onClick={() => signIn()}
      className="rounded-full bg-blue px-6 py-2 text-white hover:bg-darkerBlue"
    >
      Sign in
    </button>
  );
}
