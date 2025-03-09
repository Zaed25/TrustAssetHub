export interface BuyerData {
  name: string;
  email: string;
  phone: string;
  profilePic: string | null;
  bankAccount: string;
  maxAmount: string;
  monthlySavings: string;
  location: string;
}

export const registerBuyer = async (data: BuyerData): Promise<{ success: boolean; data: BuyerData }> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, data };
};