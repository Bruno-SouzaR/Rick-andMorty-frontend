import React, { useMemo } from 'react';
import { PaginationContainer, PageNumber, PageNavButton, Ellipsis }  from './styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const maxPagesToShow = 5;

  const pageNumbers = useMemo(() => {
    if (totalPages <= 1) return [];

    const halfMax = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(1, currentPage - halfMax);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    const pages: (number | string)[] = [];

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('start-ellipsis');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('end-ellipsis');
      }
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <PaginationContainer aria-label="Pagination">
      <PageNavButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        &lt;
      </PageNavButton>

      {pageNumbers.map((item) => {
        if (typeof item === 'number') {
          return (
            <PageNumber
              key={item}
              active={currentPage === item}
              onClick={() => onPageChange(item)}
              aria-current={currentPage === item ? 'page' : undefined}
              type="button"
              aria-label={`Page ${item}`}
              disabled={currentPage === item}
            >
              {item}
            </PageNumber>
          );
        }

        return (
          <Ellipsis key={item} aria-hidden="true">
            &hellip;
          </Ellipsis>
        );
      })}

      <PageNavButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        &gt;
      </PageNavButton>
    </PaginationContainer>
  );
};