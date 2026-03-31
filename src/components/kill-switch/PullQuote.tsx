interface PullQuoteProps {
  quote: string;
  cite?: string;
}

export function PullQuote({ quote, cite }: PullQuoteProps) {
  return (
    <div className="ks-pull-quote">
      <p>{quote}</p>
      {cite && <cite>{cite}</cite>}
    </div>
  );
}
