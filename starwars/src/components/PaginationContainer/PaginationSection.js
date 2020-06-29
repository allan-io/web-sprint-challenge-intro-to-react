import React from "react"
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import "./PaginationSection.css"

const PaginationSection = (props) => {
    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem disabled>
                <PaginationLink disabled first href="#" />
            </PaginationItem>
            <PaginationItem disabled>
                <PaginationLink disabled previous href="#" />
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink href="#">
                    1
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    2
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    3
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    4
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    5
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    6
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    7
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    8
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    9
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
    )
}

export default PaginationSection