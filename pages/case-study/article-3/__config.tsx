import { IProps } from "@/components/CaseStudy/Template";
import { NextResponse } from "next/server";

export const config: IProps = {
    variant: "4",

    title: "RA Connect",

    description: "Enterprise Risk Services, Reports, and Insight",

    sections: [
        {
            name: "Section 1",
            title: "Test title",
            content: ["Connecting the MBC to the WTS application for accounting data.", "Because of the large scale of services within WTS, it could be quite challenging to seperate all the services from eachother."],
        },
        {
            name: "Section 2",
            title: "Test title",
            content: [
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sequi non iure. Recusandae voluptatem laboriosam vitae praesentium consequatur deserunt animi.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem architecto id velit sit similique ducimus optio necessitatibus. Tempora sint dolor provident velit repellendus natus officia reiciendis porro praesentium optio vero nobis eligendi, vel",
            ],
        },
        {
            name: "Section 3",
            title: "Test title",
            content: [
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sequi non iure. Recusandae voluptatem laboriosam vitae praesentium consequatur deserunt animi.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem architecto id velit sit similique ducimus optio necessitatibus. Tempora sint dolor provident velit repellendus natus officia reiciendis porro praesentium optio vero nobis eligendi, vel",
            ],
        },
    ],
    images: [
        {
            title: "image1",
            url: "https://source.unsplash.com/random/800x500?it",
        },
        {
            title: "image2",
            url: "https://source.unsplash.com/random/500x500?pc",
        },
        {
            title: "image3",
            url: "https://source.unsplash.com/random/500x500?business",
        },
        {
            title: "image4",
            url: "https://source.unsplash.com/random/500x500?company",
        },
    ],
};

/**
 * Placeholder folder
 *
 */
export default function __Redirect() {
    return <></>;
}
