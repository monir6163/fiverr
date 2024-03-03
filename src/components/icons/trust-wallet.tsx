import { cn } from "@/lib/utils";

export const TrustWallet = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-[30px] w-[30px]", className)}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="15" cy="15" r="15" fill="#3375BB" />
      <path
        d="M15 24.4062C14.8075 24.4061 14.6204 24.3425 14.4678 24.2252C14.4678 24.2252 13.7998 23.722 11.9534 22.7101C9.12772 21.1624 7.828 19.3051 7.46778 16.3002C7.18901 13.9741 7.00799 9.11559 7.00075 8.90923C6.9956 8.78508 7.01703 8.66127 7.0636 8.54608C7.11017 8.43089 7.1808 8.32697 7.27078 8.24128C7.36075 8.15559 7.46799 8.09011 7.58532 8.04921C7.70264 8.00831 7.82735 7.99294 7.9511 8.00413C7.9692 8.00413 9.85903 8.16343 11.4846 7.70726C12.5552 7.3985 13.5572 6.88859 14.437 6.20481C14.5948 6.07251 14.7941 6 15 6C15.2059 6 15.4052 6.07251 15.5629 6.20481C16.4418 6.89291 17.4439 7.40713 18.5153 7.71994C20.1445 8.1761 22.0307 8.01681 22.0506 8.01681C22.1743 8.00559 22.2989 8.02095 22.4162 8.06186C22.5334 8.10277 22.6405 8.16829 22.7304 8.25401C22.8202 8.33973 22.8907 8.44368 22.937 8.55887C22.9834 8.67407 23.0046 8.79784 22.9992 8.9219C22.9992 9.12826 22.8182 13.9904 22.5321 16.3129C22.1701 19.3178 20.8722 21.175 18.0483 22.7209C16.2019 23.7328 15.5376 24.2343 15.5303 24.2397C15.3764 24.3515 15.1902 24.41 15 24.4062ZM8.78197 9.78174C8.84533 11.3403 9.00281 14.4393 9.20737 16.0939C9.46079 18.2082 10.1287 19.7142 12.797 21.1787C13.8831 21.7706 14.5818 22.2014 15.0072 22.4784C15.4326 22.2014 16.1368 21.7706 17.2174 21.1787C19.8875 19.7178 20.5464 18.2082 20.7926 16.0939C20.9971 14.4393 21.1546 11.3403 21.2179 9.78174C20.1471 9.79183 19.0796 9.66098 18.0429 9.39255C16.9588 9.08028 15.9316 8.59691 15 7.96069C14.0683 8.59691 13.0411 9.08028 11.957 9.39255C10.9203 9.66098 9.85282 9.79183 8.78197 9.78174Z"
        fill="white"
      />
    </svg>
  );
};
