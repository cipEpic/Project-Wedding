import { IProps } from "@/components/CaseStudy/Template";
import { NextResponse } from "next/server";

export const config: IProps = {
    variant: "1",

    title: "RA Connect",

    description: "Enterprise Risk Services, Reports, and Insight",

    sections: [
        {
            name: "Section 1",
            title: "Brief",
            content: [
                "RA Connect is an application by which Deloitte, the precursor in finance, wants to connect their staff in the Risk Advisory (RA) devision from all over the world. The RA help organizations take a Risk Intelligent approach to managing financial, technology and business risks.",
                "This application can be seen as a form of social media where their RA staff can host or attend events and share their knowledge, stories, articles, media, etc., related to the RA activities within Deloitte.",
            ],
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
