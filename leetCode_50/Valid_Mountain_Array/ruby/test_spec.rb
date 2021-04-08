require_relative 'main'
  describe "validMountainArray" do
    it "Returns the right result; Input = [2,1], result = false" do
      input = [2,1]
      result = false
      expect(validMountainArray(input)).to eq(result)
    end
    it "Returns the right result; input = [3,5,5], result = false" do
      input = [3,5,5];
      result = false
      expect(validMountainArray(input)).to eq(result)
    end
    it "Returns the right result; input = [0,3,2,1], result = true" do
      input = [0,3,2,1];
      result = true
      expect(validMountainArray(input)).to eq(result)
    end
    it "Returns the right result; input = [0, 2, 3, 3, 5, 2, 1, 0], result = false" do
      input = [0, 2, 3, 3, 5, 2, 1, 0];
      result = false
      expect(validMountainArray(input)).to eq(result)
    end
  end