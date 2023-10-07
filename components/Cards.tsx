export default function Cards() {
  return (
    <div className="flex sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] content-center mx-auto">
      <BoxWrapper>
        <div className="card-body ">
          <h2 className="card-title">Sales</h2>
          <p className="price">$ 12,53</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="card-body">
          <h2 className="card-title">Sales</h2>
          <p className="price">$ 12,53</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="card-body">
          <h2 className="card-title">Sales</h2>
          <p className="price">$ 12,53</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="card-body">
          <h2 className="card-title">Sales</h2>
          <p className="price">$ 12,53</p>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }:any) {
  return (
    <div className="cardBorder bg-[#3f3f464d] shadow-xl border-t-2 border-cyan-100 rounded-xl sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-5 mx-4">
      {children}
    </div>
  );
}