import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import $ from 'jquery';

const SECTIONS_MAP = [
    { id: 'intro', title: 'Intro' },
    { id: 'hobbies', title: 'Hobbies' },
    { id: 'volunteer', title: 'Volunteer' },
]

function MeSectionBreadcrumbs(props) {
    const gotoSection = e => {
        let elem = $(e.target).closest('li')
        const clicked_index = Math.ceil(elem.index() / 2)
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#me-${SECTIONS_MAP[clicked_index].id}`).offset().top - 90
        }, 800);
    }

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {SECTIONS_MAP.map((item, i) => {
                return (
                    <Link
                        key={i}
                        href={`#me#${item.id}`}
                        onClick={gotoSection}
                        color={props.sectionIndex === i ? "textPrimary" : "inherit"}
                        aria-current={props.sectionIndex === i ? "page" : null}
                    >
                        {item.title}
                    </Link>
                )
            })}
        </Breadcrumbs>
    )
}

export default MeSectionBreadcrumbs;