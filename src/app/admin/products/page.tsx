import { Button } from "@/components/ui/button"
import { PageHeader } from "../_components/PageHeader"
import Link from "next/link"
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminProductPage(){
    return (
    <>
    <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
            <Link href="/admin/products/new">Add Product</Link>
        </Button>
    </div>
    <div> <ProductsTable/></div>
   
    </>)
}


function ProductsTable(){
    return (
        <Table>
            <TableHeader>
            <TableRow>
                <TableHead className="w-0"><span className="sr-only">Availible For Purchase</span></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead className="w-0"><span className="sr-only">Actions</span></TableHead>
            </TableRow>
            </TableHeader>
        </Table>    
    )
}
