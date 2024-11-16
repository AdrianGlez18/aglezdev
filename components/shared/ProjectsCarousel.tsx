import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/shared/carousel"
import { projects } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectsCarousel = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex w-full max-w-[80%] p-4">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"

                >
                    <CarouselContent >
                        {projects.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2 xl:basis-1/3 align-middle justify-center flex ">
                                <div className=" max-w-sm bg-secondary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


                                    <Link href={`/projects/${item.id}`} passHref>
                                        <Image
                                            className="rounded-t-lg"
                                            src={item.imageSource}
                                            alt=""
                                            width={1920}
                                            height={1080} />
                                    </Link>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-typography">
                                                {item.title}
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                        <Link
                                            href={`/projects/${item.id}`} passHref
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-typography bg-buttons rounded-lg  focus:ring-4 focus:outline-none"
                                        >
                                            Ver más
                                            <svg
                                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default ProjectsCarousel