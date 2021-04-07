require_relative 'main'
  describe "numRescueBoats" do
    
    it "Returns the right result; input: [1,2], limit = 3 -- result: 1" do
      people = [1,2];
      limit = 3;
      result = 1;
      expect(numRescueBoats(people, limit)).to eq(result)
    end
    
    it "Returns the right result; input: [3,2,2,1], limit = 3 -- result: 3" do
      people = [3,2,2,1];
      limit = 3;
      result = 3;
      expect(numRescueBoats(people, limit)).to eq(result)
    end
    
    it "Returns the right result; input: [3,5,3,4], limit = 5 -- result: 4" do
      people = [3,5,3,4];
      limit = 5;
      result = 4;
      expect(numRescueBoats(people, limit)).to eq(result)
    end
    
    it "Returns the right result; input: [44,10,29,12,49,41,23,5,17,26], limit = 50 -- result: 6" do
      people = [44,10,29,12,49,41,23,5,17,26];
      limit = 50;
      result = 6;
      expect(numRescueBoats(people, limit)).to eq(result)
    end
    
    
  end