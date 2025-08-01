export interface HeroCardProps {
    num: number
}

export interface SelectedFilterProps {
    category: string;
}

export interface FilterButtonProps {
    name: string;
    type: string;
}

export interface ComponentListProps {
    setViewComponentInfo: (viewComponentInfo: boolean) => void;
}

export interface ComponentCardProps {
    tags: string[];
}

export interface ComponentNavProps {
    setComponents: React.Dispatch<React.SetStateAction<string[]>>;
    selectedComponents: string [];
    showFilters: (filter: boolean) => void;
}

export interface UpdateInfoProps {
    updateInfo: (displayName: string, displayTags: string[]) => void;
}

export interface SetInfoProps {
    displayName: string;
    displayTags: string[];
}

export interface HeaderProps {
    viewList: (list: boolean) => void;
    list: boolean;
}

export interface CodeProps {
    isDisplayed: boolean;
}

export interface ModifyComponentProps {
    setModify: (list: boolean) => void;
}