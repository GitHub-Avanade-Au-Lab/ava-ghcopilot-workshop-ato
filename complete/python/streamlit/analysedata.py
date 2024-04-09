import streamlit as st
import pandas as pd

def main():
    st.title('CSV File Upload and Data Visualization')
    uploaded_file = st.file_uploader("Choose a CSV file", type="csv")

    if uploaded_file is not None:
        data = pd.read_csv(uploaded_file)
        st.dataframe(data)

        # Convert 'day' column to datetime
        data['day'] = pd.to_datetime(data['day'], format="%d/%m/%Y")

        # Group data by 'day' and calculate the sum of 'breakdown_suggestions_count' and 'breakdown_acceptances_count'
        grouped_data = data.groupby('day')[['breakdown_suggestions_count', 'breakdown_acceptances_count']].sum()

        # Create a line chart
        st.line_chart(grouped_data)

if __name__ == "__main__":
    main()