"use client"

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import {  useTransition } from "react";
import { deleteProduct, toggleProductAvailability } from "../../_actions/products";

export function ActiveToggleDropdownItem({ id, isAvailibleForPurchase} : {id:string, isAvailibleForPurchase: boolean}){
    const [isPending, startTransition] = useTransition()
return (
    <DropdownMenuItem 
        disabled={isPending}
        onClick={() => {startTransition(async () => {
                await toggleProductAvailability(id, isAvailibleForPurchase)
            })
        }}>
        {isAvailibleForPurchase ? "Deactivate" : "Activate"}
    </DropdownMenuItem>
)}

export function DeleteDropdownItem({id, disabled} : {id: string, disabled : boolean}){
    const [isPending, startTransition] = useTransition()
    return (
        <DropdownMenuItem 
            disabled={disabled || isPending}
            onClick={() => {startTransition(async () => {
                    await deleteProduct(id)
                })
            }}>
                Delete
        </DropdownMenuItem>
    )}