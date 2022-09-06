export default interface VotationProps {
  id: string;

  title: string;
  description?: string;

  user: {
    id: string;

    name: string;
    lastName: string;
    avatarUri: string;
  },

  imageUri?: string;
  imageAlt?: string;

  startTime: string;
  endTime: string;

  likes: number;
  dislikes: number;
  shares: number;
}
