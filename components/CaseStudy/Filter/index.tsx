import { useState } from "react";
import FilterItem, { FilterType } from "./FilterItem";
import FilterNav from "./FilterNav";
import Carousel from "../Template/Carousel";
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";

interface IProps {
    children: ReturnType<typeof FilterItem>[];
}

export default function Filter({ children }: IProps) {
    if (!Array.isArray(children)) children = [children];

    let [tag, setTag] = useState<FilterType | undefined>();

    function handleFilterClick(e: Event): void {
        let tag = (e.target as HTMLButtonElement)?.dataset.tag as FilterType | undefined;
        setTag(tag);
    }

    function handleFilterSelect(e: SelectChangeEvent, child: any): void {
        let tag = child?.props.value as FilterType | undefined;
        setTag(tag);
    }

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="filter__nav flex justify-center phone:hidden gap-2">
               
                <FilterNav activeTag={tag} tag="transportation" onClick={handleFilterClick}>
                    Transportation App
                </FilterNav>
                <FilterNav activeTag={tag} tag="ride_hailing" onClick={handleFilterClick}>
                    Ride-hailing App
                </FilterNav>
                <FilterNav activeTag={tag} tag="delivery" onClick={handleFilterClick}>
                    Delivery App
                </FilterNav>
                <FilterNav activeTag={tag} tag="cms" onClick={handleFilterClick}>
                    CMS
                </FilterNav>
                <FilterNav activeTag={tag} tag="logistic" onClick={handleFilterClick}>
                    Logistics
                </FilterNav>
            </div>

            <div className="filter_nav phone:block hidden">
                <FormControl fullWidth>
                    <InputLabel size="small" id="i-select-label">
                        Categories
                    </InputLabel>
                    <Select onChange={handleFilterSelect} size="small" variant="outlined" required labelId="i-select-label" id="i-select" label="Category">
                        <MenuItem value="" className="text-[#aaa]">
                            All Categories
                        </MenuItem>
                        <MenuItem value="transportation">Transportation App</MenuItem>
                        <MenuItem value="ride_hailing">Ride-hailing App</MenuItem>
                        <MenuItem value="delivery">Delivery App</MenuItem>
                        <MenuItem value="cms">CMS</MenuItem>
                        <MenuItem value="logistic">Logistics</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="content grid grid-cols-4 phone:grid-cols-2 overflow-hidden gap-4">{children.filter((f) => !tag || f.props.tag === tag)}</div>
        </div>
    );
}
