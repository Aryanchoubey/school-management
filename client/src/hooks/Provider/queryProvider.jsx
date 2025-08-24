
const QueryProvider = ({children}) => {
  
  const queryClient = new QueryClient
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
} 