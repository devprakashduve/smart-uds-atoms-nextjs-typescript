export interface SearchResultsTemplateProps {
  query: string;
  results: any[];
  isLoading: boolean;
  totalResults: number;
  onPageChange: (page: number) => void;
  currentPage: number;
  children?: React.ReactNode;
}
