import TokenCard from "@/components/TokenCard";

function TokenListing() {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {
        // tokens.map((tokens, index) => (
        // <TokenCard key={index} tokens={tokens} />
        <>
          <TokenCard />
          <TokenCard />
          <TokenCard />
        </>

        // ))
      }
    </div>
  );
}

export default TokenListing;
