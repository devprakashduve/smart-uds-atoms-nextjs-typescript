import { TestimonialCardProps } from './TestimonialCard.interface';
import UDSImage from '@/Components/Atoms/Image';

export default function TestimonialCard({
  testimonialText,
  imageSource,
  userName,
  userPosition,
  textAlignment = 'center',
  cardDesign = 'default',
}: TestimonialCardProps) {
  const displayCard =
    cardDesign === 'default' ? (
      <div
        className={`p-6 text-${textAlignment} from-atom-card-background to-atom-card-to_background rounded-card bg-gradient-to-r shadow-lg`}
      >
        <div
          className={`mt-4 flex ${textAlignment === 'center' ? 'justify-center' : textAlignment === 'left' ? 'justify-start' : 'justify-end'}`}
        >
          {textAlignment === 'center' ? (
            <p className="text-atom-card-dark italic">{testimonialText}</p>
          ) : (
            <UDSImage
              className={`h-12 w-12 rounded-full border-2 ${textAlignment === 'left' ? 'justify-start' : 'justify-end'}`}
              src={imageSource}
              alt={userName}
            />
          )}
        </div>
        <div
          className={`mt-4 flex ${textAlignment === 'center' ? 'justify-center' : textAlignment === 'left' ? 'justify-start' : 'justify-end'}`}
        >
          {textAlignment !== 'center' ? (
            <p className="text-atom-card-dark italic">{testimonialText}</p>
          ) : (
            <UDSImage
              className="h-12 w-12 rounded-full border-2"
              src={imageSource}
              alt={userName}
            />
          )}
        </div>
        <h4 className="mt-2 font-semibold">{userName}</h4>
        <p className="text-atom-card-dark/80 text-sm">{userPosition}</p>
      </div>
    ) : (
      <div
        className={`from-atom-card-background to-atom-card-to_background rounded-card bg-gradient-to-r p-6 shadow-lg text-${textAlignment} shadow-lg`}
      >
        <div
          className={`mt-4 flex ${textAlignment === 'center' ? 'justify-center' : textAlignment === 'left' ? 'justify-start' : 'flex-row-reverse'} items-center`}
        >
          <UDSImage
            className="h-12 w-12 rounded-full border-2"
            src={imageSource}
            alt={userName}
          />
          <p
            className={`text-atom-card-dark italic ${textAlignment === 'center' ? 'mt-4' : textAlignment === 'left' ? 'ml-4' : 'mr-4'}`}
          >
            {testimonialText}
          </p>
        </div>
        <h4 className="mt-2 font-semibold">{userName}</h4>
        <p className="text-atom-card-dark/80 text-sm">{userPosition}</p>
      </div>
    );
  return displayCard;
}
