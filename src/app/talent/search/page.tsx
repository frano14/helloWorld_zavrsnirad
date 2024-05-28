import prisma from "@/lib/prisma";
import Image from "next/image";
import companyLogoPlaceholder from "@/assets/images/company-logo-placeholder.png";

export default async function Page() {
  const users = await prisma.user.findMany({
    where: {
      isTalent: true,
    },
  });

  return (
    <>
      <div className="m-auto mt-[128px] w-full gap-2 px-0 py-16 xs:px-6 sc:max-w-[1200px] sc:px-0">
        <h1 className="customFont text-center text-[24px]">
          Find your perfect talent
        </h1>
        <p className="mb-12 text-center text-muted-foreground">
          Click on talent to contact him
        </p>
        <div className=" mb-6 grid grid-cols-5 justify-center rounded-full px-6 font-semibold">
          <div className=" text-left">Name</div>
          <div className=" text-right">Location</div>
          <div className=" text-right">Time</div>
          <div className=" text-right">Country</div>
          <div className=" text-right">Experience</div>
        </div>

        {users.map((user) => (
          <a key={user.id} href={`mailto:${user.email}`}>
            <div className=" grayBg mb-2 grid grid-cols-5 items-center justify-center rounded-full px-6 py-2">
              <div className="flex items-center justify-start gap-2 text-left">
                <Image
                  src={user?.image}
                  alt="profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <p>{user.name}</p>
              </div>
              <p className=" text-right">{user.worklocation}</p>
              <p className=" text-right">{user.worktime}</p>
              <p className=" text-right">{user.country}</p>
              <p className=" text-right">{user.experience}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
