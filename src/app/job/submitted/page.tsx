import correct from "../../../assets/images/correct.png";
import Image from "next/image";

export default async function Page() {
  return (
    <main className="m-auto mt-[128px] flex flex-col items-center justify-center gap-4 px-0 xs:flex-row xs:px-6 sc:max-w-[1200px] sc:px-0">
      <Image src={correct} width={128} height={128} alt="correct" />
      <h1 className="customFont text-center text-[32px] xs:text-[38px] md:text-[44px]">
        your job has been successfully submitted
      </h1>
      <Image src={correct} width={128} height={128} alt="correct" />
    </main>
  );
}
