require 'main'

  describe "moveZeros" do
  
    
    it "Returns the right array, input: [0, 1, 3, 5, 0], output: [1, 3, 5, 0, 0]" do
      input = [0, 1, 3, 5, 0]
      output =  [1, 3, 5, 0, 0]
      expect(moveZeros(input)).to eq(output)
    end
    
    it "Should return the right array, input: [0, 0, 3, 0, 32], output: [3, 32, 0, 0, 0]" do
      input = [0, 0, 3, 0, 32]
      output =  [3, 32, 0, 0, 0]
      expect(moveZeros(input)).to eq(output)
    end
    
    it "Should return the right array, input: [10, 2, 0, 8, 20], output: [10, 2, 8, 20, 0]" do
      input = [0, 1, 3, 5, 0]
      output =  [1, 3, 5, 0, 0]
      expect(moveZeros(input)).to eq(output)
    end
    
    it "Should return the right array, input: [0], output: [0]" do
      input = [0]
      output =  [0]
      expect(moveZeros(input)).to eq(output)
    end
    
    it "Should return the right array, input: [], output: []" do
      input = []
      output =  []
      expect(moveZeros(input)).to eq(output)
    end
    
  end