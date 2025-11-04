import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../components/ui/item";

export function ItemDemo() {
  return (
    <div className="flex  max-w-md flex-col gap-6 border-2 border-emerald-900 w-fit p-14">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            variant="outline"
            size="sm"
            className="text-black cursor-pointer"
          >
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  );
}
