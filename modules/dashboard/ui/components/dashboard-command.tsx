import {
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SearchIcon, UserIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface DashboardCommandProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const DashboardCommand = ({ open, setOpen }: DashboardCommandProps) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandItem>
          <SearchIcon className="mr-2 h-4 w-4" />
          Search meetings
        </CommandItem>
        <CommandItem>
          <UserIcon className="mr-2 h-4 w-4" />
          Find agents
        </CommandItem>
      </CommandList>
    </CommandDialog>
  );
};
