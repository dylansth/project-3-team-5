import { gql } from '@apollo/client';


export const QUERY_GET_ME = gql`
    {
        me {
    email
    username
    _id
    annualSalary
    createdCampaigns {
      _id
      createdAt
      currentAmount
      description
      endDate
      image
      targetAmount
      title
    }
  }
    }
`;

export const QUERY_DONATION = gql`
  query getdonation($donations: [DonationInput]) {
    checkout(donations: $donations) {
      session
    }
  }
`;

export const QUERY_CAMPAIGN = gql`
    {
  campaigns {
    createdAt
    creatorId {
      _id
    }
    endDate
    image {
      contentType
      data
    }  
    title
    currentAmount
    targetAmount
    description
    donations {
      _id
      amount
      createdAt
      donorId
    }
    reviews {
      createdAt
      creatorId {
        _id
      }
      description  
    }
  }
}
`;

