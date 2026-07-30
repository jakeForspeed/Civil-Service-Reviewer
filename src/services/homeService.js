import manifest from "../config/manifest.json";
import {
    BookOpen,
    ClipboardList
} from "lucide-react";


const modeIcons = {
    review: BookOpen,
    "mock-test": ClipboardList
};



export function getModes(){

    return manifest.modes.map(mode => ({
        ...mode,
        icon: modeIcons[mode.id]
    }));

}

